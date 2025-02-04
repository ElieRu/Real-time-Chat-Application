'use client';

import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import { data } from './api/data/module.js'

export default function Index() {
  return (
    <>
      {/* <Hero /> */}
      <h1>The content...</h1>
      <p>
        { data() }
      </p>
    </>
  );
}
