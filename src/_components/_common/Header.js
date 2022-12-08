import Page, { Grid, GridColumn } from '@atlaskit/page';
import Container from '../_common/Container'; 
import VerticalSpace from '../_common/VerticalSpace'; 
import Button, { ButtonGroup } from '@atlaskit/button';

const Header = () => {
  return (
        <Page testId="header-section">
             <Container spaceY={10} bgColor="rgb(33 33 33)">
                    <Grid layout="fluid" spacing="cosy">
                         <GridColumn medium={6}>
                               <div className='logo'>
                                      <img src='https://www.prescreening.io/static/media/prescreeningLogo.356bc345.png' />
                               </div>
                         </GridColumn>
                         <GridColumn medium={6}> 
                                <div className='css-1f37v01-PrimaryItemsContainer justify-content-end'>
                                    <ButtonGroup >
                                            <Button testId='plain-button'>Home</Button>
                                            <Button testId='plain-button'>Documentation</Button>
                                            <Button testId='border-button' appearance="default">Login</Button>
                                            <Button testId='primary-button' appearance="primary">Book a Free Demo</Button>
                                    </ButtonGroup>
                                </div> 
                         </GridColumn>
                    </Grid>
             </Container>
        </Page>
  )
}

export default Header