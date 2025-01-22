# steriNexus (CRM)

**English:**

steriNexus is a hospital management system designed to streamline communication between various departments. The platform allows for real-time patient status tracking, user management, and scheduling. It includes features for adding and editing patient and user data, managing schedules, and generating real-time charts to track key metrics. The system is built with Angular and Firestore, providing a responsive and efficient interface for hospital staff.

**Deutsch:**

steriNexus ist ein Krankenhausmanagement-System, das die Kommunikation zwischen verschiedenen Abteilungen optimiert. Die Plattform ermöglicht das Echtzeit-Tracking von Patientenstatus, das Verwalten von Benutzerdaten und die Planung von Terminen. Es umfasst Funktionen zum Hinzufügen und Bearbeiten von Patienten- und Benutzerdaten, das Verwalten von Zeitplänen und das Erstellen von Echtzeit-Diagrammen zur Verfolgung wichtiger Kennzahlen. Das System ist mit Angular und Firestore entwickelt und bietet eine reaktionsschnelle und effiziente Benutzeroberfläche für das Krankenhauspersonal.

## Changelog (English)

### Version V0.1 (2025-01-12)
- **feat**: Enhance user addition dialog with form fields for first name, last name, and date selection.
- **feat**: Add dialog for adding users; implement open dialog functionality in user component.
- **optimized**: Add margin to mat-icon for improved spacing in app component.

### Version V0.11 (2025-01-13)
- **feat**: Finish Firestore injection; upload user data now available.
- **optimized**: Update app.config.ts for improved configuration.
- **optimized**: Improve dialog-and-user.component.ts for better performance.

### Version V0.12 (2025-01-14)
- **feat**: Add email field to user model and update dialog for user addition.
- **optimized**: Enhance user interface with card layout and improve user addition dialog.

### Version V0.13 (2025-01-15)
- **feat**: User data can now be updated using the edit function.
- **feat**: Add dropdown menu for user-detail component.
- **feat**: Add angular calendar for scheduling.
- **optimized**: Reduce sidenav width for better responsiveness.

### Version V0.14 (2025-01-16)
- **feat**: Add patient detail and dialog component to edit patient record.
- **feat**: Add new patient feature.
- **optimized**: Improve translation and table SCSS for patient import.

### Version V0.15 (2025-01-17)
- **feat**: Add grid boxes for dashboard.
- **feat**: Update favicon and sidenav text.

### Version V0.16 (2025-01-19)
- **feat**: Add controlling component.
- **feat**: Add router links for dashboard and user to responsive burger menu.
- **optimized**: Improve SCSS for toolbar and burger menu responsiveness.

### Version V0.17 (2025-01-20)
- **feat**: Use data service to provide controlling data.
- **feat**: Add test diagram to controlling component.
- **feat**: Import data to the dashboard.

### Version V0.18 (2025-01-21)
- **feat**: Add JSDoc comments for improved code documentation.

### Version V0.19 (2025-01-22)
- **feat**: Add real-time patient status on the dashboard.
- **feat**: Add mat-form-field for patient statuses in the OR schedule with multiple options.
- **feat**: Add pie chart for users relative to patients.
- **optimized**: Real-time patient status now updates efficiently on Firestore.
- **optimized**: Improve chart options for responsive views.
- **optimized**: Pie chart fetches real user and patient data from Firestore.
- **optimized**: Charts and form-field updates for real-time functionality.
- **optimized**: Real-time patient status on the dashboard.
- **optimized**: Form-field status now updates on Firestore for every patient.
- **optimized**: Charts improved for better responsiveness.
- **optimized**: Pie chart fetches real users and patient data from Firestore.


# Changelog (Deutsch)

## Version V0.1 (2025-01-12)
- **feat**: Dialog zur Benutzererstellung erweitert, jetzt mit Formularfeldern für Vorname, Nachname und Datumswahl.
- **feat**: Dialog zum Hinzufügen von Benutzern hinzugefügt; Öffnen des Dialogs im Benutzerkomponenten umgesetzt.
- **optimized**: Margin für mat-icon hinzugefügt, um den Abstand im App-Komponenten zu verbessern.

## Version V0.11 (2025-01-13)
- **feat**: Abschluss der Firestore-Injektion; Benutzer-Daten-Upload jetzt verfügbar.
- **optimized**: Aktualisierung von app.config.ts für eine verbesserte Konfiguration.
- **optimized**: Verbesserung von dialog-and-user.component.ts für eine bessere Leistung.

## Version V0.12 (2025-01-14)
- **feat**: E-Mail-Feld zum Benutzer-Modell hinzugefügt und Dialog zur Benutzererstellung aktualisiert.
- **optimized**: Benutzeroberfläche mit Kartenlayout verbessert und Dialog zur Benutzererstellung optimiert.

## Version V0.13 (2025-01-15)
- **feat**: Benutzer-Daten können jetzt mit der Bearbeitungsfunktion aktualisiert werden.
- **feat**: Dropdown-Menü für die Benutzer-Detail-Komponente hinzugefügt.
- **feat**: Angular-Kalender für die Terminplanung hinzugefügt.
- **optimized**: Breite der Seitenleiste reduziert für bessere Reaktionsfähigkeit.

## Version V0.14 (2025-01-16)
- **feat**: Patienten-Detail und Dialog-Komponente zum Bearbeiten von Patientenakten hinzugefügt.
- **feat**: Neue Patientenfunktion hinzugefügt.
- **optimized**: Verbesserung der Übersetzungen und SCSS für den Patientenimport.

## Version V0.15 (2025-01-17)
- **feat**: Hinzufügen von Grid-Boxen für das Dashboard.
- **feat**: Favicon und Text der Seitenleiste aktualisiert.

## Version V0.16 (2025-01-19)
- **feat**: Steuerungs-Komponente hinzugefügt.
- **feat**: Router-Links für Dashboard und Benutzer zum responsiven Burger-Menü hinzugefügt.
- **optimized**: Verbesserung des SCSS für Toolbar und Burger-Menü für bessere Reaktionsfähigkeit.

## Version V0.17 (2025-01-20)
- **feat**: Verwendung des Datenservices zur Bereitstellung von Steuerungsdaten.
- **feat**: Hinzufügen eines Test-Diagramms zur Steuerungs-Komponente.
- **feat**: Import von Daten ins Dashboard.

## Version V0.18 (2025-01-21)
- **feat**: Hinzufügen von JSDoc-Kommentaren für eine verbesserte Code-Dokumentation.

## Version V0.19 (2025-01-22)
- **feat**: Echtzeit-Patientenstatus auf dem Dashboard hinzugefügt.
- **feat**: mat-form-field für Patientenstatus im OP-Plan mit mehreren Optionen hinzugefügt.
- **feat**: Kreisdiagramm für Benutzer relativ zu Patienten hinzugefügt.
- **optimized**: Echtzeit-Patientenstatus wird jetzt effizient auf Firestore aktualisiert.
- **optimized**: Verbesserte Diagrammoptionen für responsive Ansichten.
- **optimized**: Das Kreisdiagramm holt echte Benutzer- und Patientendaten aus Firestore.
- **optimized**: Verbesserungen an Diagrammen und Formularfeldern für Echtzeit-Funktionalität.
- **optimized**: Echtzeit-Patientenstatus auf dem Dashboard.
- **optimized**: Formularfeld-Status wird nun für jeden Patienten in Firestore aktualisiert.
- **optimized**: Diagramme verbessert für bessere Reaktionsfähigkeit.
- **optimized**: Das Kreisdiagramm holt echte Benutzer- und Patientendaten aus Firestore.
