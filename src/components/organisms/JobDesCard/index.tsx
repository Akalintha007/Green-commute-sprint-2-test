import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CommonProps } from '@mui/material/OverridableComponent';
import TypographyComponent from '../../atoms/Typography';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { makeStyles } from '@mui/styles';
import theme from '../../../theme';
import CardActions from '@mui/material/CardActions';
import Button from '../../atoms/Button';
import { useState } from 'react';
import { Grid, styled, SvgIcon } from '@mui/material';
import FileUploadCard from '../FileUploadCard';

interface DescProps {
  companyLogo: string;
  company: string;
  title: string;
  location: string;
  postedDate: string;
  onClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
  jobId: string;
}

const useStyles = makeStyles({
  title: {
    color: `${theme.palette.secondary.dark}`,
  },
  svg: {
    height: '60px',
    width: '60px',
  },
  location: {
    color: `${theme.palette.secondary.darker}`,
    height: '10px !important',
  },
  apply: {
    width: '50px !important',
  },
});

const MainCard = styled(Card)({
  width: '363px',
});
const TypoGrid = styled(Grid)({
  width: '260px',
});

const CompanyLogo = styled('img')({
  marginTop: '6px',
  marginRight: '20px',
  width: '55px',
  height: '55px',
});

const MoreIcon = styled('div')({
  marginLeft: '-10px',
  marginTop: '11px',
});

const CustomCardActions = styled(CardActions)({
  justifyContent: 'flex-start',
  paddingRight: '10px',
  paddingLeft: '75px',
});

const CustomCardHeader = styled(CardHeader)({
  padding: '0px',
});

const CustSvgIcon = styled(MoreHorizIcon)({
  marginLeft: '-22px',
});
const CustomBox = styled(Box)({
  marginLeft: '75px',
  marginTop: '-69px',
  width: '265px',
});

export interface JobState {
  id: string;
  state: boolean;
}

const JobDesCard: React.FC<DescProps & CommonProps> = ({
  companyLogo,
  postedDate,
  company,
  title,
  location,
  onClickHandler,
  jobId,
}) => {
  const [isSaved, changeState] = useState<boolean>(false);
  const [isApplied, changeAppliedState] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [currentJobState, setCurrentJobState] = useState<JobState>({ id: '1', state: false });

  const handleClickOpen = () => {
    setOpen(true);
    setToggle(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
    changeAppliedState(true);
  };

  const classes = useStyles();
  const wrapSaveClickHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    changeState(!isSaved);
    const temp: JobState = {
      id: jobId,
      state: true,
    };
    console.log('Temp: ', temp.id, temp.state);
    setCurrentJobState(temp);
    changeState(!isSaved);
  };

  const wrapApplyClickHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    changeAppliedState(!isApplied);
  };

  return (
    <>
      <FileUploadCard
        open={open}
        handleClose={handleClose}
        handleIconClose={handleClose}
        toggle={toggle}
        handleToggle={handleToggle}
      />
      <MainCard elevation={0}>
        <CustomCardHeader
          // avatar={<CompanyLogo src={companyLogo} alt={'company_logo'} />}
          title={
            <Grid container direction='row' spacing={0}>
              <Grid item>
                <CompanyLogo src={companyLogo} alt={'company_logo'} />
              </Grid>
            </Grid>
          }
          subheader={
            <CustomBox>
              <TypographyComponent variant='subtitle1' className={classes.title}>
                {title}
              </TypographyComponent>
              <TypographyComponent variant='caption' className={classes.location}>
                {company}
                <br></br>
              </TypographyComponent>
              <TypographyComponent variant='caption' className={classes.location}>
                {location}
              </TypographyComponent>
              <br></br>
              <TypographyComponent variant='captionBold' className={classes.location}>
                {postedDate}
              </TypographyComponent>
            </CustomBox>
          }
          action={
            <MoreIcon>
              <CustSvgIcon />
            </MoreIcon>
          }
        />
        <CustomCardActions>
          <Button
            color='primary'
            type={'button'}
            size='small'
            buttonVariant='outlined'
            typoVariant='captionBold'
            onClickHandler={wrapSaveClickHandle}
          >
            {currentJobState.id === jobId && currentJobState.state ? 'Unsave' : 'Save'}
          </Button>
          <Button
            color='primary'
            type={'submit'}
            size='small'
            buttonVariant='contained'
            typoVariant='captionBold'
            onClickHandler={handleClickOpen}
          >
            {!isApplied ? 'Apply' : 'Applied'}
          </Button>
        </CustomCardActions>
      </MainCard>
    </>
  );
};

export default JobDesCard;
