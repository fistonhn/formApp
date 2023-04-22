'use client';
import React, {useState} from 'react'
import Input from '@/components/Inputs/Input'
import { Select } from '@/components/Select'
import { Button } from '@/components/Button/Button'
import { Content } from 'next/font/google';

const intitialData = {
  accountHolderName: "",
  bankName: "",
  routing: "",
  accountName: "",
  country: "",
}

const fewCountries: any[] = [{content: 'Rwanda', value: 'Rwanda'}, {content: 'Canada', value: 'Canada'}, {content: 'USA', value: 'USA'}]

const Home = () => {
  const [formData, setformData] = useState(intitialData)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setformData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let bankInfo: any[] = []

    bankInfo = [...bankInfo, formData]

    console.log(bankInfo);
    alert('Bank infomation successfully saved in json')
  }

  const handleCancel = () => {

    alert('Bank infomation cancelled')
  }

  const informationForm = () => {
    return (
      <>
      <div className='grid grid-cols-2 w-[90%] mx-auto gap-5'>
        <Input required label='Account Holder Name*' name='accountHolderName' onChange={handleChange} value={formData.accountHolderName} type="text" />
        <Input required label='Account Name*' name='accountName' onChange={handleChange} value={formData.accountName} type="text" />
        <Input required label='Bank Name*' name='bankName' onChange={handleChange} value={formData.bankName} type="text"/>

        <Select required label='Country*' name='country' onChange={handleChange} value={formData.country} options={fewCountries} />
        <Input label='Routing' name='routing' onChange={handleChange} value={formData.routing} type="text" />

      </div>
      </>
    )
  }

  return (
    <>
    <div className="h-screen overflow-auto bg-white pt-20">
      <h1 className='ml-[5%] font-bold text-lg mb-5'>Bank Information</h1>
      <form onSubmit={handleSubmit}>
        {informationForm()}
        <div className='grid gap-5 w-[90%] mx-auto   mt-10 pb-10'>
          <div className='space-x-3'>
            {/* <Button onClick={handleCancel} title='Cancel' type='button' /> */}
            <button type = "button" className='shadow-md bg-white border-cyan-600 hover:bg-cyan-600 hover:color-white py-2 px-4 rounded-md text-sm font-semibold outline-none text-cyan-500'>
              cancel
          </button>

            <Button title='Save changes' type='submit' />

          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Home
