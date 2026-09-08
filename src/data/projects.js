export const projectCategories = [
  {
    id: 'analytics',

    label: {
      en: 'DATA ANALYTICS',
      ru: 'АНАЛИТИКА ДАННЫХ',
    },

    project: {
      id: 'ga4-ecommerce',
      year: '2026',

      previews: [
        '/projects/ga4-ecommerce1.png',
        '/projects/ga4-ecommerce2.png',
        '/projects/ga4-ecommerce3.png',
        '/projects/ga4-ecommerce4.png',
      ],

      title: {
        en: 'GA4 Ecommerce Analytics',
        ru: 'GA4 Ecommerce Analytics',
      },

      category: {
        en: 'DATA ANALYTICS · E-COMMERCE',
        ru: 'АНАЛИТИКА ДАННЫХ · E-COMMERCE',
      },

      description: {
        en: 'E-commerce analytics project built around GA4 data in BigQuery, covering SQL analysis, KPI calculation and interactive business reporting.',
        ru: 'Аналитический проект на основе данных GA4 в BigQuery: SQL-анализ, расчёт KPI и создание интерактивной бизнес-отчётности.',
      },

      overview: {
        en: [
          'Works with GA4 ecommerce data stored in BigQuery.',
          'Transforms raw event-level data into analytical datasets using SQL.',
          'Calculates key ecommerce metrics and performance indicators.',
          'Builds interactive reporting for exploring business performance.',
        ],
        ru: [
          'Работает с данными GA4 об электронной коммерции в BigQuery.',
          'Преобразует сырые данные о событиях в аналитические наборы с помощью SQL.',
          'Рассчитывает ключевые ecommerce-метрики и показатели эффективности.',
          'Создаёт интерактивную отчётность для анализа результатов бизнеса.',
        ],
      },

      workflow: {
        en: 'GA4 → BigQuery → SQL → KPI analysis → Power BI',
        ru: 'GA4 → BigQuery → SQL → анализ KPI → Power BI',
      },

      metrics: [
        {
          value: 'GA4',
          label: {
            en: 'data source',
            ru: 'источник данных',
          },
        },
        {
          value: 'SQL',
          label: {
            en: 'analytical layer',
            ru: 'аналитический слой',
          },
        },
        {
          value: 'BI',
          label: {
            en: 'interactive reporting',
            ru: 'интерактивная отчётность',
          },
        },
      ],

      technologies: [
        'GA4',
        'BigQuery',
        'SQL',
        'Power BI',
      ],

      github:
        'https://github.com/Anastasiia-A-Petrova/ga4-ecommerce-analytics',
    },
  },

  {
    id: 'automation',

    label: {
      en: 'AUTOMATION',
      ru: 'АВТОМАТИЗАЦИЯ',
    },

    project: {
      id: 'steam-gacha-monitor',
      year: '2026',

      previews: [
        '/projects/steam-gacha-monitor1.png',
        '/projects/steam-gacha-monitor2.png',
        '/projects/steam-gacha-monitor3.png',
      ],

      title: {
        en: 'Steam Gacha Activity Monitor',
        ru: 'Steam Gacha Activity Monitor',
      },

      category: {
        en: 'DATA · AUTOMATION · MONITORING',
        ru: 'ДАННЫЕ · АВТОМАТИЗАЦИЯ · МОНИТОРИНГ',
      },

      description: {
        en: 'Automated monitoring system for gacha and live-service games on Steam. Collects player activity, builds historical time series, detects anomalies and delivers automated reports and alerts.',
        ru: 'Автоматизированная система мониторинга gacha и live-service игр в Steam. Собирает данные об активности игроков, формирует исторические временные ряды, выявляет аномалии и автоматически отправляет отчёты и уведомления.',
      },

      overview: {
        en: [
          'Collects player activity data from the Steam Web API on a regular schedule.',
          'Stores historical snapshots in PostgreSQL for time-series analysis.',
          'Uses SQL views to calculate analytical indicators and detect changes in activity.',
          'Runs automated workflows with n8n and sends alerts through Telegram.',
          'Provides a Google Sheets dashboard and FastAPI layer for accessing results.',
        ],
        ru: [
          'Регулярно собирает данные об активности игроков через Steam Web API.',
          'Сохраняет исторические снимки в PostgreSQL для анализа временных рядов.',
          'Использует SQL-представления для расчёта аналитических показателей и выявления изменений активности.',
          'Запускает автоматизированные процессы через n8n и отправляет уведомления в Telegram.',
          'Предоставляет дашборд в Google Sheets и FastAPI-слой для доступа к результатам.',
        ],
      },

      workflow: {
        en: 'Steam Web API → Python → PostgreSQL → SQL → n8n → Telegram / Google Sheets',
        ru: 'Steam Web API → Python → PostgreSQL → SQL → n8n → Telegram / Google Sheets',
      },

      metrics: [
        {
          value: '17',
          label: {
            en: 'games monitored',
            ru: 'игр под мониторингом',
          },
        },
        {
          value: '3h',
          label: {
            en: 'collection interval',
            ru: 'интервал сбора',
          },
        },
        {
          value: '6',
          label: {
            en: 'SQL analytical views',
            ru: 'SQL-представлений',
          },
        },
      ],

      technologies: [
        'Python',
        'PostgreSQL',
        'SQL',
        'FastAPI',
        'n8n',
        'Steam Web API',
        'Telegram',
        'Google Sheets',
      ],

      github:
        'https://github.com/Anastasiia-A-Petrova/steam-gacha-activity-monitor',
    },
  },

  {
    id: 'bots-ai',

    label: {
      en: 'BOTS & AI',
      ru: 'БОТЫ И AI',
    },

    project: {
      id: 'hh-job-bot',
      year: '2026',

      previews: [
        '/projects/hh-job-bot1.png',
        '/projects/hh-job-bot2.png',
        '/projects/hh-job-bot3.png',
      ],

      title: {
        en: 'HH Job Bot',
        ru: 'HH Job Bot',
      },

      category: {
        en: 'BOT · API · AUTOMATION',
        ru: 'БОТ · API · АВТОМАТИЗАЦИЯ',
      },

      description: {
        en: 'Telegram bot for searching and working with job vacancies through the HH.ru API.',
        ru: 'Telegram-бот для поиска и работы с вакансиями через API HH.ru.',
      },

      overview: {
        en: [
          'Searches job vacancies through the official HH.ru API.',
          'Processes and structures vacancy data returned by the API.',
          'Provides a simple Telegram interface for interacting with search results.',
          'Automates the workflow from API request to delivery of relevant vacancies.',
        ],
        ru: [
          'Ищет вакансии через официальный API HH.ru.',
          'Обрабатывает и структурирует данные, полученные от API.',
          'Предоставляет простой Telegram-интерфейс для работы с результатами поиска.',
          'Автоматизирует процесс от запроса к API до выдачи подходящих вакансий.',
        ],
      },

      workflow: {
        en: 'HH.ru API → Python → data processing → Telegram',
        ru: 'HH.ru API → Python → обработка данных → Telegram',
      },

      metrics: [
        {
          value: 'API',
          label: {
            en: 'data source',
            ru: 'источник данных',
          },
        },
        {
          value: 'TG',
          label: {
            en: 'Telegram interface',
            ru: 'интерфейс Telegram',
          },
        },
        {
          value: '24/7',
          label: {
            en: 'automated workflow',
            ru: 'автоматизированный процесс',
          },
        },
      ],

      technologies: [
        'Python',
        'Telegram',
        'HH.ru API',
        'REST API',
      ],

      github:
        'https://github.com/Anastasiia-A-Petrova/hh-job-bot',
    },
  },

  {
    id: 'data-engineering',

    label: {
      en: 'DATA ENGINEERING',
      ru: 'DATA ENGINEERING',
    },

    project: {
      id: 'telegram-channel-analysis',
      year: '2026',

      previews: [
        '/projects/telegram-channel-analysis1.png',
        '/projects/telegram-channel-analysis2.png',
        '/projects/telegram-channel-analysis3.png',
        '/projects/telegram-channel-analysis4.png',
        '/projects/telegram-channel-analysis5.png',
      ],

      title: {
        en: 'Telegram Channel Analysis',
        ru: 'Telegram Channel Analysis',
      },

      category: {
        en: 'DATA COLLECTION · PROCESSING · ANALYSIS',
        ru: 'СБОР ДАННЫХ · ОБРАБОТКА · АНАЛИЗ',
      },

      description: {
        en: 'A data collection and analysis pipeline for extracting Telegram channel data and transforming raw messages into structured analytical datasets.',
        ru: 'Pipeline для сбора и анализа данных Telegram-каналов: от извлечения сырых сообщений до формирования структурированных аналитических данных.',
      },

      overview: {
        en: [
          'Collects messages and metadata from Telegram channels using Telethon.',
          'Transforms raw channel data into structured datasets for analysis.',
          'Cleans and prepares collected data with Python and Pandas.',
          'Creates an analytical layer for exploring channel activity and content.',
        ],
        ru: [
          'Собирает сообщения и метаданные Telegram-каналов с помощью Telethon.',
          'Преобразует сырые данные каналов в структурированные наборы для анализа.',
          'Очищает и подготавливает собранные данные с помощью Python и Pandas.',
          'Формирует аналитический слой для исследования активности и контента каналов.',
        ],
      },

      workflow: {
        en: 'Telegram → Telethon → Python / Pandas → structured data → SQL analysis',
        ru: 'Telegram → Telethon → Python / Pandas → структурированные данные → SQL-анализ',
      },

      metrics: [
        {
          value: 'API',
          label: {
            en: 'data collection',
            ru: 'сбор данных',
          },
        },
        {
          value: 'ETL',
          label: {
            en: 'data processing',
            ru: 'обработка данных',
          },
        },
        {
          value: 'SQL',
          label: {
            en: 'analysis',
            ru: 'анализ',
          },
        },
      ],

      technologies: [
        'Python',
        'Telethon',
        'Pandas',
        'SQL',
      ],

      github:
        'https://github.com/Anastasiia-A-Petrova/telegram-channel-analysis',
    },
  },

  {
    id: 'api',

    label: {
      en: 'API & INTEGRATIONS',
      ru: 'API И ИНТЕГРАЦИИ',
    },

    project: {
      id: 'youtube-analytics',
      year: '2026',

      previews: [
        '/projects/youtube-analytics1.png',
        '/projects/youtube-analytics2.png',
        '/projects/youtube-analytics3.png',
      ],

      title: {
        en: 'YouTube Analytics',
        ru: 'YouTube Analytics',
      },

      category: {
        en: 'API · DATA COLLECTION · ANALYTICS',
        ru: 'API · СБОР ДАННЫХ · АНАЛИТИКА',
      },

      description: {
        en: 'Analytics project built around the YouTube Data API, covering automated data collection, processing and analysis of video and channel performance.',
        ru: 'Аналитический проект на основе YouTube Data API: автоматизированный сбор, обработка и анализ показателей видео и каналов.',
      },

      overview: {
        en: [
          'Collects video and channel data through the YouTube Data API.',
          'Automates data extraction and prepares datasets for further analysis.',
          'Processes performance metrics with Python and Pandas.',
          'Visualizes the resulting analytical data in an interactive BI environment.',
        ],
        ru: [
          'Собирает данные о видео и каналах через YouTube Data API.',
          'Автоматизирует извлечение данных и подготавливает наборы для дальнейшего анализа.',
          'Обрабатывает показатели эффективности с помощью Python и Pandas.',
          'Визуализирует результаты анализа в интерактивной BI-среде.',
        ],
      },

      workflow: {
        en: 'YouTube Data API → Python → Pandas → analytics → Power BI',
        ru: 'YouTube Data API → Python → Pandas → аналитика → Power BI',
      },

      metrics: [
        {
          value: 'API',
          label: {
            en: 'data source',
            ru: 'источник данных',
          },
        },
        {
          value: 'Python',
          label: {
            en: 'data collection',
            ru: 'сбор данных',
          },
        },
        {
          value: 'BI',
          label: {
            en: 'visualization',
            ru: 'визуализация',
          },
        },
      ],

      technologies: [
        'Python',
        'YouTube Data API',
        'Pandas',
        'Power BI',
      ],

      github:
        'https://github.com/Anastasiia-A-Petrova/youtube-analytics-gleb-oleynik',
    },
  },
]
