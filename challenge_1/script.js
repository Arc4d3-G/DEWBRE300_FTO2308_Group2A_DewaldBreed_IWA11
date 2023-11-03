// script.js

const root_1 = document.querySelector('[data-key="order1"]')
const biscuits_1 = document.querySelector('[data-key="order1"] .biscuits .count')
const donuts_1 = document.querySelector('[data-key="order1"] .donuts .count')
const pancakes_1 = document.querySelector('[data-key="order1"] .pancakes .count')
const status_1 = document.querySelector('[data-key="order1"] .status dd')

const root_2 = document.querySelector('[data-key="order2"]')
const biscuits_2 = document.querySelector('[data-key="order2"] .biscuits .count')
const donuts_2 = document.querySelector('[data-key="order2"] .donuts .count')
const pancakes_2 = document.querySelector('[data-key="order2"] .pancakes .count')
const status_2= document.querySelector('[data-key="order2"] .status dd')

const root_3 = document.querySelector('[data-key="order3"]')
const biscuits_3 = document.querySelector('[data-key="order3"] .biscuits .count')
const donuts_3 = document.querySelector('[data-key="order3"] .donuts .count')
const pancakes_3 = document.querySelector('[data-key="order3"] .pancakes .count')
const status_3 = document.querySelector('[data-key="order3"] .status dd')

biscuits_1.innerText = root_1.dataset.biscuits
donuts_1.innerText = root_1.dataset.donuts
pancakes_1.innerText = root_1.dataset.pancakes
status_1.innerText = root_1.dataset.delivered === "true" ? "Delivered" : "Pending"

biscuits_2.innerText = root_2.dataset.biscuits,
donuts_2.innerText = root_2.dataset.donuts,
pancakes_2.innerText = root_2.dataset.pancakes,
status_2.innerText = root_2.dataset.delivered === "true" ? "Delivered" : "Pending"

biscuits_3.innerText = root_3.dataset.biscuits,
donuts_3.innerText = root_3.dataset.donuts,
pancakes_3.innerText = root_3.dataset.pancakes,
status_3.innerText = root_3.dataset.delivered === "true" ? "Delivered" : "Pending"