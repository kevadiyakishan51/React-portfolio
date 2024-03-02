import React from 'react'
import PageInfo from '../../commonComp/PageInfo'
import ServiceInfo from './servicesCard/ServiceInfo'

function Services() {
  return (
    <>
        <PageInfo bgTitle="Services" mainTitle="Services" />

        <ServiceInfo />
    </>
  )
}

export default Services