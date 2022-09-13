# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## TICKET 1: Create a middleware that generates custom IDs

Create a middleware that generates `custom ID`s, the NPM UUID package can be used. the job of this middleware is to generate and return a unique ID when called.

**Acceptance criteria:** Returns a Unique ID on each call
**Time estimate:** 1 hour

## TICKET 2: Remove IDs from the returned data.

Remove the IDs from the returned data, this can be done by destructuring the returned data from the `getShiftsByFacility` and then save the new data to an object.

**Acceptance criteria:** shows the new object in the console when function is called
**Time estimate:** 1 hour

## TICKET 3: Add new IDs.

Add new IDs; this can be done by importing and calling the `Custom ID` middleware and adding a new ID to the saved object in `Ticket 2`.

**Acceptance criteria:** Returns the modified data with the new IDs when `getShiftsByFacility` is called
**Time estimate:** 1:30 hour

## TICKET 4: Link `generateReport` with `getShiftsByFacility`.

Link `generateReport` with `getShiftsByFacility`; when the generateReport is called, the data gotten will be from the new data gotten from the `getShiftsByFacility` with `Custom ID`. There is no need saving new data to database

**Acceptance criteria:** Returns the modified data with the new IDs
**Time estimate:** 2 hours

## More breakdown

The IDs shown to the client when the `getShiftsByFacility` is called is the IDs gotten from the `Custom ID` middleware.
When the `generateReport` function is called; the IDs associated with the data will be different since the IDs where changed during the call on `getShiftsByFacility`.
