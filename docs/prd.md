*A PRD (Product Requirements Document) is created before creating a product or feature and includes the planning required for developers to execute effectively. This document is usually prepared by Product Managers, read more [here](https://www.atlassian.com/agile/product-management/requirements)*

# Product Requirements Documentation

**Summary**
| Field | Detail |
|-------|--------|
| Project Name | Prototype|
| Description | This app seeks to provide a searchable Monster index of Dungeons and Dragons 5th Edition. |
| Developers | Kyle Canamar |
| Live Website | {website of deployed application} |
| Repo | [GitRepo](https://github.com/kcanamar/dnd5e_monsters) |

## Problem Being Solved and Target Market

As a Dungeon Master having a visual database of all creatures at your fingertips will help drive great stories.

## User Stories

List of stories users should experience when using your application.

- users can search the monsters in Dungeons and dragon 5th edition
 
## Route Tables

For backend Applications you'll want to detail the different routes and types of your request your server can receive. There are three main things to define.

- The endpoint: https://www.dnd5eapi.co/api/
- The method: jQuery
- The response: what the response should be, a web page, json data, etc.

You should also include any additional notes on any special headers that may be used and so forth.

| Endpoint | Method | Response | Other |
| -------- | ------ | -------- | ----- |
| /item | GET | JSON of all items | |
| /item | POST | Create new item return JSON of new item | body must include data for new item |
| /item/:id | GET | JSON of item with matching id number | |
| /item/:id | PUT | update item with matching idea, return its JSON | body must include updated data |
| /item/:id | DELETE | delete the item with the matching id | |
| /auth/signup | POST | creates new user account returns user JSON | new user info must be included in body |
| /auth/login | POST | logs in user and returns user JSON with JWT token | username and password must be included in body |

## Component Architecture

You can use the [Mermaid Markdown Syntax](https://mermaid-js.github.io/mermaid/#/flowchart) to create a chart of how the parts of your frontend website relate to each other. Units should represent components of your page. The following is an example you may see in a Single Page Application like a React App.

```mermaid
flowchart LR
  App-->Header
  App-->Main
  App-->Footer
  Main-->Router
  Router-->Home
  Router-->Login
  Router-->Dashboard
```

## User Interface Mockups

Use tooks like [Figma](https://www.figma.com/), [Mockflow](https://www.mockflow.com/) or [UXPIN](https://www.uxpin.com/). If you need inspiration visit a site like [Behance](https://www.behance.net/?tracking_source=typeahead_search_direct&search=web%20mockup). 

![Web Mockup](https://zippypixels.com/wp-content/uploads/2015/09/01-Free-perspective-website-mockup-824x542.jpg)

[wireframe](./wireframe.png)