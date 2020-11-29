import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Whey-Rule-1-Protein-5lbs',
    imgPath:
      'https://cdn.wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg',
  },
  {
    label: 'BPI-Whey-ISO-HD-5lbs-23kg',
    imgPath:
      'https://cdn.wheyshop.vn/wp-content/uploads/2019/03/BPI-Whey-ISO-HD-5lbs-23kg-1-280x280.jpg',
  },
  {
    label: 'MUTANT-MASS-15lbs-68kg',
    imgPath:
      'https://cdn.wheyshop.vn/wp-content/uploads/2018/01/MUTANT-MASS-15lbs-68kg-280x280.jpg',
  },
  {
    label: 'BPI-Best-Bcaa-30-lần-dùng',
    imgPath:
      'https://cdn.wheyshop.vn/wp-content/uploads/2016/10/BPI-Best-Bcaa-30-lần-dùng-280x280.jpg',
  },
  {
    label: 'The-Curse-50-servings',
    imgPath:
      'https://cdn.wheyshop.vn/wp-content/uploads/2016/10/The-Curse-50-servings-280x280.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
    flexGrow: 3,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: 'yellow',
  },
  img: {
    height: 280,
    maxWidth: 280,
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
}));

const StepperList = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography style={{ fontWeight: 'bolder' }}>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default StepperList;