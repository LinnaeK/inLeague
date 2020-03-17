import flushPromises from "flush-promises"
import store from '../../../src/store/store'
import mockAxios from "axios";

describe('authenticated', () => {

  it('is an action in the store', () => {
    expect(store._actions.authenticate).toBeDefined()
  })

  it("fetches user data from the inleague API and stores it in the store", async () => {
    mockAxios.post.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        "data": {
          "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJVU0VSSUQiOiJjNjM5MTk2MS04YjdhLTQyOTMtODljYi1jYmU4YWM5Y2E3YWYiLCJJQVQiOjE1ODQzOTE4NzAsIklTUyI6ImlubGVhZ3VlSlMiLCJFWFAiOjE1ODQzOTkwNzB9.c6y9ZZGUC516Mk_Ta5mFnoC-XnzCYoguDmmvrGHWqdIcBwnsQNsnL2MjNLoAFG-0UukTFlHUISoApNjY8aQwVQ",
          "securityHash": "E2C635A7D62EF75F12D91D7929CF91B08905A3029BFE30FCA6E0021D1B22B591",
          "userData": {
              "isDirector": 0,
              "isDataReader": 0,
              "isPlayerAdmin": 0,
              "competitionsMemento": [],
              "isCoach": 1,
              "isVolunteerAdmin": 0,
              "isEventAdmin": 0,
              "isWebmaster": 0,
              "isCupDirector": 0,
              "isBirthCertAdmin": 0,
              "unauthorizedMenuItems": [],
              "lastCheckedSharedQueries": "",
              "isParent": 1,
              "isAreaStaff": 0,
              "region": 1,
              "authorizedCategories": [],
              "refAuth": {},
              "isInvisible": 0,
              "roles": [
                  "Coach",
                  "Parent"
              ],
              "rcRegion": "",
              "chiefRefsMemento": [],
              "enableBeta": 0,
              "userID": "C6391961-8B7A-4293-89CB-CBE8AC9CA7AF",
              "isAreaDirector": 0,
              "hasRoleRequiringBGCheck": 2,
              "isImpersonating": false,
              "isPracticeScheduler": 0,
              "isRefScheduler": 0,
              "activePlayerRegistrations": [],
              "lastname": "Candidate",
              "isRef": 0,
              "isInleague": 0,
              "isScholarshipAdmin": 0,
              "isRegistrar": 0,
              "isEmailAdmin": 0,
              "playerAssignmentsMemento": [],
              "volunteerACoach": false,
              "AYSOID": "",
              "volunteerRef": false,
              "authorizedMenuItems": [],
              "rolesRemovedByVMP": false,
              "isCampDirector": 0,
              "isBoard": 0,
              "divisionsMemento": [],
              "lastCheckedMenu": "March, 16 2020 23:51:10 -0700",
              "isArea": 0,
              "inleague_csrfToken": "fq15y7kbx7w9rf7h2kc3g0xeyv2sf6k6i0bev07a",
              "isTreasurer": 0,
              "queryIDsSharedToRole": [],
              "compManagerMode": false,
              "firstname": "Test",
              "otherUserAuth": [],
              "isUpperDivision": false,
              "isEventReporter": 0,
              "email": "jobs@inleague.com",
              "isOptingOut": false,
              "lasteAYSOYear": 2020,
              "isRC": 0,
              "clientID": "E2CE1A48-50A0-4C54-A754-C9DCE2F86902",
              "volunteerCoach": false,
              "checkedRefAuth": false,
              "checkedMenuItems": [],
              "userNum": 136000,
              "isGameScheduler": 0,
              "hasChild": false,
              "coachAssignmentsMemento": [
                  {
                      "divID": "3F6FEA0C-2D3F-42BC-963C-5EAB50FDD689",
                      "userID": "C6391961-8B7A-4293-89CB-CBE8AC9CA7AF",
                      "clientID": "E2CE1A48-50A0-4C54-A754-C9DCE2F86902",
                      "showTeamsOnDashboards": 1,
                      "competitionID": 1,
                      "teamDesignation": "B10-1 Rogues",
                      "tournament": 0,
                      "teamName": "Be Ten One",
                      "teamID": "C090398E-75A1-44C9-810D-5D361B0A6CDC",
                      "mayEnterScores": 1,
                      "active": 1,
                      "title": "Head Coach",
                      "competitionUID": "D1E9BFFC-B84E-4F7F-B7A9-CAA366528B5C",
                      "seasonUID": "44FF0664-DC6A-49EF-93C2-BD4EDCC38A4F",
                      "accounting": 1,
                      "seasonID": 7
                  }
              ]
          }
      },
      "error": false,
      "messages": []
      }
    }))
    
    
    store.dispatch('authenticate', {
      username: "jobs@inleague.com",
      password: "openBook99",
    })
    
    await flushPromises()
    expect(mockAxios.post).toHaveBeenCalledTimes(1)
    expect(mockAxios.post).toHaveBeenCalledWith(
      'https://demo.inleague.io/api/v1/authenticate',
              {
                username: "jobs@inleague.com",
                password: "openBook99"
              }
    )
    expect(store.state.jwt).toEqual("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJVU0VSSUQiOiJjNjM5MTk2MS04YjdhLTQyOTMtODljYi1jYmU4YWM5Y2E3YWYiLCJJQVQiOjE1ODQzOTE4NzAsIklTUyI6ImlubGVhZ3VlSlMiLCJFWFAiOjE1ODQzOTkwNzB9.c6y9ZZGUC516Mk_Ta5mFnoC-XnzCYoguDmmvrGHWqdIcBwnsQNsnL2MjNLoAFG-0UukTFlHUISoApNjY8aQwVQ",
    )
    expect(store.state.userData).toEqual({
      "isDirector": 0,
      "isDataReader": 0,
      "isPlayerAdmin": 0,
      "competitionsMemento": [],
      "isCoach": 1,
      "isVolunteerAdmin": 0,
      "isEventAdmin": 0,
      "isWebmaster": 0,
      "isCupDirector": 0,
      "isBirthCertAdmin": 0,
      "unauthorizedMenuItems": [],
      "lastCheckedSharedQueries": "",
      "isParent": 1,
      "isAreaStaff": 0,
      "region": 1,
      "authorizedCategories": [],
      "refAuth": {},
      "isInvisible": 0,
      "roles": [
          "Coach",
          "Parent"
      ],
      "rcRegion": "",
      "chiefRefsMemento": [],
      "enableBeta": 0,
      "userID": "C6391961-8B7A-4293-89CB-CBE8AC9CA7AF",
      "isAreaDirector": 0,
      "hasRoleRequiringBGCheck": 2,
      "isImpersonating": false,
      "isPracticeScheduler": 0,
      "isRefScheduler": 0,
      "activePlayerRegistrations": [],
      "lastname": "Candidate",
      "isRef": 0,
      "isInleague": 0,
      "isScholarshipAdmin": 0,
      "isRegistrar": 0,
      "isEmailAdmin": 0,
      "playerAssignmentsMemento": [],
      "volunteerACoach": false,
      "AYSOID": "",
      "volunteerRef": false,
      "authorizedMenuItems": [],
      "rolesRemovedByVMP": false,
      "isCampDirector": 0,
      "isBoard": 0,
      "divisionsMemento": [],
      "lastCheckedMenu": "March, 16 2020 23:51:10 -0700",
      "isArea": 0,
      "inleague_csrfToken": "fq15y7kbx7w9rf7h2kc3g0xeyv2sf6k6i0bev07a",
      "isTreasurer": 0,
      "queryIDsSharedToRole": [],
      "compManagerMode": false,
      "firstname": "Test",
      "otherUserAuth": [],
      "isUpperDivision": false,
      "isEventReporter": 0,
      "email": "jobs@inleague.com",
      "isOptingOut": false,
      "lasteAYSOYear": 2020,
      "isRC": 0,
      "clientID": "E2CE1A48-50A0-4C54-A754-C9DCE2F86902",
      "volunteerCoach": false,
      "checkedRefAuth": false,
      "checkedMenuItems": [],
      "userNum": 136000,
      "isGameScheduler": 0,
      "hasChild": false,
      "coachAssignmentsMemento": [
          {
              "divID": "3F6FEA0C-2D3F-42BC-963C-5EAB50FDD689",
              "userID": "C6391961-8B7A-4293-89CB-CBE8AC9CA7AF",
              "clientID": "E2CE1A48-50A0-4C54-A754-C9DCE2F86902",
              "showTeamsOnDashboards": 1,
              "competitionID": 1,
              "teamDesignation": "B10-1 Rogues",
              "tournament": 0,
              "teamName": "Be Ten One",
              "teamID": "C090398E-75A1-44C9-810D-5D361B0A6CDC",
              "mayEnterScores": 1,
              "active": 1,
              "title": "Head Coach",
              "competitionUID": "D1E9BFFC-B84E-4F7F-B7A9-CAA366528B5C",
              "seasonUID": "44FF0664-DC6A-49EF-93C2-BD4EDCC38A4F",
              "accounting": 1,
              "seasonID": 7
          }
      ]
  })
  })
})