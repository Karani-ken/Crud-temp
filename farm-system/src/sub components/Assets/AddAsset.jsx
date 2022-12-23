import axios from 'axios';
import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
const AddAsset = () => {
  const url =('http://localhost:5000/assets/add')
  const [AssetName, setAssetName] = useState('');
  const [AssetCategory, setAssetCategory] = useState('');
  const [AssetDescription, setAssetDescription] = useState('');
  const [AssetCost, setAssetCost] = useState('');
  const [AssetRecieptNo, setAsssetRecieptNo] = useState('');
  const [Message, setMessage]= useState('')
  const AddAsset=(e)=>{  
    e.preventDefault(); 
    const asset={
      assetname: AssetName,
      assetcategory: AssetCategory,
      assetdescription:AssetDescription,
      assetcost:AssetCost,
      assetrecieptno: AssetRecieptNo
    }
    console.log(asset)
    axios.post(`${url}`,asset)
    .then(res =>{
      console.log(res.data);
      setMessage('Asset Added successfully');
    })
      
  }
  return (
    <div className='bg-emerald-700 min-h-screen flex items-center justify-center'>
    <div className=" flex items-center justify-center bg-emerald-500 shadow-2xl shadow-white ">
    <form className='border-2 border-gray-100 h-[500px] w-[300px] text-center items-center justify-center rounded-3xl'>
            <span className='mt-6'>
                <h1 className="text-black font-black">Add Asset</h1>
                <p className='text-xl bg-rose-400 rounded-lg'>{Message}</p>
                <div className='m-12 flex items-start flex-col justify-start space-y-3'>
                    <input type='text' placeholder='Name' className='rounded text-center' onChange={(e)=>{setAssetName(e.target.value)}} />
                    <input type="file" className='rounded text-center cursor-pointer' />
                    <input type='text' placeholder='Category' className='rounded text-center' onChange={(e)=>{setAssetCategory(e.target.value)}} />
                    <input type='text' placeholder='Description' className='rounded text-center' onChange={(e)=>{setAssetDescription(e.target.value)}} />
                    <input type='text' placeholder='Cost' className='rounded text-center' onChange={(e)=>{setAssetCost(e.target.value)}}/>
                    <input type='text' placeholder='Receipt No' className='rounded text-center' onChange={(e)=>{setAsssetRecieptNo(e.target.value)}} />
                </div>
                <div className="m-3 flex items-center justify-center">
                    <button  onClick={AddAsset}
                    className='border-2 rounded border-white mx-6 
                    bg-emerald-700 text-white w-24 hover:text-black 
                    hover:border-emerald-700 hover:bg-white'>Add</button>
                    <Link to='/assets' className='border-2 rounded border-white mx-6 bg-red-700 text-white w-24 hover:text-black hover:border-red-700 hover:bg-white'>back</Link>
                </div>
            </span>
           

    </form>
    </div>
   

</div>
  )
}

export default AddAsset