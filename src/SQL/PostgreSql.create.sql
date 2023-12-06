﻿




CREATE TABLE Контроль_ТЗ (
 primaryKey UUID NOT NULL,
 ID INT NOT NULL,
 Дата_проверки TIMESTAMP(3) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Анкеты (
 primaryKey UUID NOT NULL,
 Опыт_работы VARCHAR(255) NOT NULL,
 ЛК VARCHAR(255) NOT NULL,
 ID INT NOT NULL,
 ФИО VARCHAR(255) NOT NULL,
 Контакты VARCHAR(255) NOT NULL,
 Образование VARCHAR(255) NOT NULL,
 Вакансия UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 ID INT NOT NULL,
 Название VARCHAR(255) NOT NULL,
 Оклад INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Отделы (
 primaryKey UUID NOT NULL,
 ID INT NOT NULL,
 Название VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 ID INT NOT NULL,
 ФИО VARCHAR(255) NOT NULL,
 Контакты VARCHAR(255) NOT NULL,
 Образование VARCHAR(255) NOT NULL,
 Опыт_работы VARCHAR(255) NOT NULL,
 Дата_приема TIMESTAMP(3) NOT NULL,
 Отдел UUID NOT NULL,
 Должность UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Проверяемые (
 primaryKey UUID NOT NULL,
 Результат VARCHAR(255) NOT NULL,
 Сотрудник UUID NOT NULL,
 Контроль_ТЗ UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Анкеты ADD CONSTRAINT FKae3b387da121a10d13769ca2e5989f4690741416 FOREIGN KEY (Вакансия) REFERENCES Должности; 
CREATE INDEX Indexae3b387da121a10d13769ca2e5989f4690741416 on Анкеты (Вакансия); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FK7711e32a86b93635e8af5940ddf182e805116692 FOREIGN KEY (Отдел) REFERENCES Отделы; 
CREATE INDEX Index7711e32a86b93635e8af5940ddf182e805116692 on Сотрудники (Отдел); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FKdb12690da9c19a13f60fc28ce9dc5fcfae00ada9 FOREIGN KEY (Должность) REFERENCES Должности; 
CREATE INDEX Indexdb12690da9c19a13f60fc28ce9dc5fcfae00ada9 on Сотрудники (Должность); 

 ALTER TABLE Проверяемые ADD CONSTRAINT FKabbb54e116bc1b619aae82036e896c08cb5de0ce FOREIGN KEY (Сотрудник) REFERENCES Сотрудники; 
CREATE INDEX Indexabbb54e116bc1b619aae82036e896c08cb5de0ce on Проверяемые (Сотрудник); 

 ALTER TABLE Проверяемые ADD CONSTRAINT FK52f94027aaf40a3567453696c0fb232e3c673a2d FOREIGN KEY (Контроль_ТЗ) REFERENCES Контроль_ТЗ; 
CREATE INDEX Index52f94027aaf40a3567453696c0fb232e3c673a2d on Проверяемые (Контроль_ТЗ); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

