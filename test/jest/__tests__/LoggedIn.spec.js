/* eslint-disable */
/**
 * @jest-environment jsdom
 */


import Vuex from "vuex"

import { createLocalVue, shallowMount } from '@vue/test-utils'
import LoggedIn from '../../../src/components/LoggedIn'
import * as All from 'quasar'

const { Quasar } = All

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

const localVue = createLocalVue()
localVue.use(Quasar, {components})
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userData: {
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
  },
  jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJVU0VSSUQiOiJjNjM5MTk2MS04YjdhLTQyOTMtODljYi1jYmU4YWM5Y2E3YWYiLCJJQVQiOjE1ODQzOTE4NzAsIklTUyI6ImlubGVhZ3VlSlMiLCJFWFAiOjE1ODQzOTkwNzB9.c6y9ZZGUC516Mk_Ta5mFnoC-XnzCYoguDmmvrGHWqdIcBwnsQNsnL2MjNLoAFG-0UukTFlHUISoApNjY8aQwVQ"
}})

describe('Error.vue', () => {
  const wrapper = shallowMount(LoggedIn, {
    localVue, 
    store
  })

  const vm = wrapper.vm

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
  
  it('displays userData from the store', () => {
  expect(wrapper.text()).toContain("C6391961-8B7A-4293-89CB-CBE8AC9CA7AF")
  })
 
})



