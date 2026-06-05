**Microservice 8 — Notification Preferences**

**User Story 1 — Manage Notification Preferences**
As a user, I want to update my notification preferences so that I only receive the types of alerts that matter to me.

**Acceptance Criteria**
- Given a user is authenticated, when they submit updated notification preferences (email on/off, frequency, categories), then the microservice saves the new preferences and returns a confirmation response.

- Given a user submits invalid preference data, when the microservice receives the request, then it returns an error explaining which fields are invalid.

**Quality Attributes**
- Usability: Accepts simple JSON structures.

- Reliability: Saves changes atomically to prevent partial updates.

**User Story 2 — Retrieve Notification Preferences**
As a developer, I want to request a user’s current notification settings so that my application can display or modify them.

**Acceptance Criteria**
- Given a valid user ID, when a program requests preferences, then the microservice returns stored preferences in JSON format.

- Given an invalid or missing user ID, when the request is made, then the microservice returns an error.

**Quality Attributes**
- Performance: Responses must be under 100ms.

- Security: Only authenticated clients may access preference data.
