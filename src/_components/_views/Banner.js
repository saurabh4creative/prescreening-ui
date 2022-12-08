import Page, { Grid, GridColumn } from '@atlaskit/page';
import Container from '../_common/Container'; 
import VerticalSpace from '../_common/VerticalSpace'; 
import Button from '@atlaskit/button'; 

const Banner = () => {
  return (
        <Page testId="banner-section">
            <Container bgColor="rgb(33 33 33)">
                <Grid layout="fluid" spacing="cosy">
                    <GridColumn medium={12}>
                            <div className='web-title white-color banner-content text-center'>
                                    <h1 className='h4'>Prescreening Platform to Manage <br /><span>Business</span> Risks</h1>
                                    <h2 className='h5'>An ML enabled platform to create dynamic workflow for risk indentification</h2>
                                    <VerticalSpace />
                                    <div className='two-btns'>
                                          <Button testId='border-button' appearance="default">Watch Demo</Button>
                                          <Button testId='primary-button' appearance="primary">Book a Free Demo</Button>
                                    </div>
                            </div>
                    </GridColumn> 
                </Grid> 
            </Container>    
            <Container bgColor="rgb(33 33 33)" spaceY={0}>
                <Grid layout="fluid" spacing="cosy">
                    <GridColumn medium={12}>
                          <div className='banner-gimg text-center'>
                               <img src="https://terra.droitlab.com/html/assets/img/dashbord_img.png" alt=''/>
                          </div>
                    </GridColumn> 
                </Grid> 
            </Container>
        </Page>
  )
}

export default Banner