import React, { useState } from 'react';

const JobMenu = () => {
  const [selectedProfession, setSelectedProfession] = useState('developer');

  const professions = [
    { id: 'developer', name: 'Разработчик' },
    { id: 'designer', name: 'Дизайнер' },
    { id: 'manager', name: 'Менеджер' },
    { id: 'marketing', name: 'Маркетолог' },
    { id: 'sales', name: 'Продавец' }
  ];

  const menuItems = {
    developer: [
      { name: 'GitHub', url: 'https://github.com' },
      { name: 'Stack Overflow', url: 'https://stackoverflow.com' },
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
      { name: 'LeetCode', url: 'https://leetcode.com' },
      { name: 'CodePen', url: 'https://codepen.io' },
      { name: 'Dev.to', url: 'https://dev.to' },
      { name: 'Medium Programming', url: 'https://medium.com/tag/programming' }
    ],
    designer: [
      { name: 'Behance', url: 'https://behance.net' },
      { name: 'Dribbble', url: 'https://dribbble.com' },
      { name: 'Figma Community', url: 'https://figma.com/community' },
      { name: 'Adobe Color', url: 'https://color.adobe.com' },
      { name: 'Pinterest', url: 'https://pinterest.com' },
      { name: 'Awwwards', url: 'https://awwwards.com' },
      { name: 'Unsplash', url: 'https://unsplash.com' }
    ],
    manager: [
      { name: 'Trello', url: 'https://trello.com' },
      { name: 'Asana', url: 'https://asana.com' },
      { name: 'Jira', url: 'https://atlassian.com/software/jira' },
      { name: 'Harvard Business Review', url: 'https://hbr.org' },
      { name: 'MindTools', url: 'https://mindtools.com' },
      { name: 'ProjectManagement.com', url: 'https://projectmanagement.com' },
      { name: 'Scrum Alliance', url: 'https://scrumalliance.org' }
    ],
    marketing: [
      { name: 'Google Analytics', url: 'https://analytics.google.com' },
      { name: 'HubSpot Academy', url: 'https://academy.hubspot.com' },
      { name: 'SEMrush', url: 'https://semrush.com' },
      { name: 'Mailchimp', url: 'https://mailchimp.com' },
      { name: 'Social Media Today', url: 'https://socialmediatoday.com' },
      { name: 'Moz Blog', url: 'https://moz.com/blog' },
      { name: 'Content Marketing Institute', url: 'https://contentmarketinginstitute.com' }
    ],
    sales: [
      { name: 'Salesforce', url: 'https://salesforce.com' },
      { name: 'LinkedIn Sales', url: 'https://linkedin.com/sales' },
      { name: 'HubSpot CRM', url: 'https://hubspot.com/products/crm' },
      { name: 'Pipedrive', url: 'https://pipedrive.com' },
      { name: 'Sales Hacker', url: 'https://saleshacker.com' },
      { name: 'Zendesk Sell', url: 'https://zendesk.com/sell' },
      { name: 'Close CRM Blog', url: 'https://close.com/blog' }
    ]
  };

  const ProfessionSelector = ({ professions, selected, onSelect }) => {
    return (
      <div style={{ marginBottom: '30px' }}>
        <h3>Выберите профессию:</h3>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          {professions.map(prof => (
            <label key={prof.id} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <input
                type="radio"
                name="profession"
                value={prof.id}
                checked={selected === prof.id}
                onChange={() => onSelect(prof.id)}
              />
              {prof.name}
            </label>
          ))}
        </div>
      </div>
    );
  };

  const MenuComponent = ({ items }) => {
    return (
      <div>
        <h3>Полезные ссылки:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {items.map((item, index) => (
            <li key={index} style={{ margin: '10px 0' }}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#3498db',
                  fontSize: '18px',
                  padding: '8px 12px',
                  display: 'inline-block',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#ecf0f1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>JobMenu - Полезные ресурсы для профессионалов</h2>
      <ProfessionSelector
        professions={professions}
        selected={selectedProfession}
        onSelect={setSelectedProfession}
      />
      <MenuComponent items={menuItems[selectedProfession]} />
    </div>
  );
};

export default JobMenu;