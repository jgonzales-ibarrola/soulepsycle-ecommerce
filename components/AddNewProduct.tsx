'use client';

import React from 'react'
import { Button } from './ui/button';
import supabase from '@/lib/supabase';

const AddNewProduct = () => {
  async function handleNewProduct() {
    const newProduct = {
      name: "subscribed-name",
      price: 321.22,
    }

    const { data, error } = await supabase.from('products').upsert(newProduct).select();
    
    if (!error) {
      alert(`Upsert the: ${JSON.stringify(data)}`)
    } else {
      throw new Error("Unable to upsert in table products.")
    }
  }

  return (
    <Button type="button" onClick={handleNewProduct} variant={'outline'}>Add New Product</Button>
  )
}

export default AddNewProduct