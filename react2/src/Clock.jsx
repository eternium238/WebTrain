import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getTimeInTimezone = () => {
    const { timezone = Intl.DateTimeFormat().resolvedOptions().timeZone, format = '24' } = this.props;
    const now = this.state.time;
    
    let offsetHours = 0;
    let offsetMinutes = 0;
    
    if (timezone.includes(':')) {
      const isNegative = timezone[0] === '-';
      const parts = timezone.replace(/[+-]/, '').split(':');
      offsetHours = parseInt(parts[0]);
      offsetMinutes = parseInt(parts[1] || 0);
      if (isNegative) {
        offsetHours = -offsetHours;
        offsetMinutes = -offsetMinutes;
      }
    } else if (timezone !== Intl.DateTimeFormat().resolvedOptions().timeZone) {
      const utcOffset = now.getTimezoneOffset();
      const targetOffset = this.getTimezoneOffsetFromName(timezone);
      if (targetOffset !== null) {
        const diffMinutes = targetOffset - (-utcOffset);
        const localTime = now.getTime();
        return new Date(localTime + diffMinutes * 60000);
      }
    }
    
    if (offsetHours !== 0 || offsetMinutes !== 0) {
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      return new Date(utc + (offsetHours * 3600000) + (offsetMinutes * 60000));
    }
    
    return now;
  };

  getTimezoneOffsetFromName = (timezoneName) => {
    try {
      const date = new Date();
      const formatter = new Intl.DateTimeFormat('en', {
        timeZone: timezoneName,
        timeZoneName: 'long'
      });
      const parts = formatter.formatToParts(date);
      return null;
    } catch (e) {
      return null;
    }
  };

  formatTime = (date) => {
    const { format = '24' } = this.props;
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    if (format === '12') {
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    }
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  render() {
    const timeInZone = this.getTimeInTimezone();
    const formattedTime = this.formatTime(timeInZone);
    
    return (
      <div style={{
        fontSize: '48px',
        fontFamily: 'monospace',
        padding: '20px',
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        borderRadius: '10px',
        display: 'inline-block'
      }}>
        {formattedTime}
      </div>
    );
  }
}

export default Clock;