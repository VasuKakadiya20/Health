import React from 'react'
import Streaks from './Streaks'
import StressTrendChart from './streeschart'
import ProgressBar from "@ramonak/react-progress-bar";
import { Brain } from 'lucide-react';

function Footerpart() {
        const value = "3";
  return (
    <>
   <div className='container d-flex gap-5'>
                    <div className='gap-3 stress'>
                        <Brain /><span className='mr-2 span'>Stress & Resilience</span>
                        <div className='mt-3 d-flex'>
                            <span>Today's Stress Level</span>
                            <span className='spanvalue'>{value}/10</span>
                        </div>
                        <ProgressBar
                            completed={value}
                            maxCompleted="10"
                            className='ProgressBar mt-1'
                        />

                        <div className="mt-5">
                            <p className="text-sm fw-semibold mb-2">7-Day Stress Trend</p>
                            <StressTrendChart />
                        </div>
                    </div>

                    <Streaks />
                </div>
                </>
  )
}

export default Footerpart