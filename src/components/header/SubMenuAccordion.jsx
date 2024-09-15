import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<FaUser sx={{ fontSize: '0.9rem' }} color='white'/>}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'black',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'black'
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function SubmenuAccordion({setIsOpen, logOut}) {
  const {isLoggedIn, user}=useSelector(store=>store.user)
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className=' font-medium'>
        {
          isLoggedIn?
          <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='bg-black text-white'>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className='bg-black text-white'>
            <Typography className='text-white'>{user?.name}</Typography>
          </AccordionSummary>
          <AccordionDetails className='bg-black text-white flex flex-col'>
              <Link href={'/watchlist'} onClick={()=>setIsOpen(false)} className='py-2'>WatchList</Link>
              <button onClick={logOut} className='py-2 text-start'>LogOut</button>
          </AccordionDetails>
      </Accordion>
          </>
          :
          <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='bg-black text-white'>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className='bg-black text-white'>
            <Typography className='text-white'>Sign In/Sign Up</Typography>
          </AccordionSummary>
          <AccordionDetails className='bg-black text-white flex flex-col'>
              <Link href={'/sign-in'} onClick={()=>setIsOpen(false)} className='py-2'>Sign In</Link>
              <Link href={'/sign-up'} onClick={()=>setIsOpen(false)} className='py-2'>Sign Up</Link>
          </AccordionDetails>
          </Accordion>
          </>
        }

      
    </div>
  );
}
