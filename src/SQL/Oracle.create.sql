



CREATE TABLE "Контроль_ТЗ"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NOT NULL,

	"Дата_проверки" DATE NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Анкеты"
(

	"primaryKey" RAW(16) NOT NULL,

	"Опыт_работы" NVARCHAR2(255) NOT NULL,

	"ЛК" NVARCHAR2(255) NOT NULL,

	"ID" NUMBER(10) NOT NULL,

	"ФИО" NVARCHAR2(255) NOT NULL,

	"Контакты" NVARCHAR2(255) NOT NULL,

	"Образование" NVARCHAR2(255) NOT NULL,

	"Вакансия" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NOT NULL,

	"Название" NVARCHAR2(255) NOT NULL,

	"Оклад" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Отделы"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NOT NULL,

	"Название" NVARCHAR2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NOT NULL,

	"ФИО" NVARCHAR2(255) NOT NULL,

	"Контакты" NVARCHAR2(255) NOT NULL,

	"Образование" NVARCHAR2(255) NOT NULL,

	"Опыт_работы" NVARCHAR2(255) NOT NULL,

	"Дата_приема" DATE NOT NULL,

	"Отдел" RAW(16) NOT NULL,

	"Должность" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Проверяемые"
(

	"primaryKey" RAW(16) NOT NULL,

	"Результат" NVARCHAR2(255) NOT NULL,

	"Сотрудник" RAW(16) NOT NULL,

	"Контроль_ТЗ" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Анкеты"
	ADD CONSTRAINT "Анкеты_FДолжно_631" FOREIGN KEY ("Вакансия") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Анкеты_IВакансия" on "Анкеты" ("Вакансия");

ALTER TABLE "Сотрудники"
	ADD CONSTRAINT "Сотрудники_FО_9250" FOREIGN KEY ("Отдел") REFERENCES "Отделы" ("primaryKey");

CREATE INDEX "Сотрудники_IО_5606" on "Сотрудники" ("Отдел");

ALTER TABLE "Сотрудники"
	ADD CONSTRAINT "Сотрудники_FД_4635" FOREIGN KEY ("Должность") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Сотрудники_IД_6987" on "Сотрудники" ("Должность");

ALTER TABLE "Проверяемые"
	ADD CONSTRAINT "Проверяемые_F_6993" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "Проверяемые_I_1142" on "Проверяемые" ("Сотрудник");

ALTER TABLE "Проверяемые"
	ADD CONSTRAINT "Проверяемые_F_4072" FOREIGN KEY ("Контроль_ТЗ") REFERENCES "Контроль_ТЗ" ("primaryKey");

CREATE INDEX "Проверяемые_IК_85" on "Проверяемые" ("Контроль_ТЗ");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


