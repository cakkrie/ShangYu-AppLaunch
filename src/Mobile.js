import {
    Typography,
    Layout,
    Row,
    Col,
    Affix,
    Image,
    Button,
    Tooltip,
    Popover,
} from 'antd'

import {
    DownloadOutlined,
} from '@ant-design/icons'

import {
    motion,
} from 'framer-motion'

import {
    useContext,
} from 'react'

import { Context } from './store/Context'

// props: sectionItem, backgroundColor
function SectionItem(props) {
    return (
        <Row justify='start' align='top' style={{'backgroundColor': props.backgroundColor, 'height': '700px', 'padding': '70px 20px'}}>
            <motion.div 
                    initial={{x: -300, opacity: 0}} 
                    whileInView={{x: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                    viewport={{once: true}}>
                <Row justify='start' style={{paddingLeft: '5px'}}>
                    <Typography.Title level={2} style={{textAlign: 'left'}}>
                        {props.sectionItem.title}
                    </Typography.Title>
                </Row>
                <Row justify='center'>
                    <Typography style={{'fontSize': '16px'}}>
                        {props.sectionItem.text}
                    </Typography>
                </Row>
            </motion.div>

            <motion.div 
                    initial={{x: -300, opacity: 0}} 
                    whileInView={{x: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                    viewport={{once: true}}>
                <Image preview={false} src={props.sectionItem.image} style={{'maxWidth': '400px'}}></Image>
            </motion.div>
        </Row>
    )
}

// props: sectionList
function SectionList(props) {
    return (
        <>
        {
            props.sectionList.map((sectionItem, index) => {
                return (
                    <SectionItem sectionItem={sectionItem} backgroundColor={index % 2 === 0? 'white': null} />    
                )

            })
        }
        </>
    )
}

function Mobile() {
    const {state, dispatch} = useContext(Context)

    return (
        <Layout style={{'overflow-x': 'hidden'}}>
            <Affix offsetTop={0}>
                <Layout.Header style={{'background': 'white', 'width': '100%', 'padding-left': '20px'}}>
                    <Row justify='start' align='middle' style={{'backgroundColor': 'white', 'width': '100%', 'height': '100%'}}>
                        <Col>
                            <Image width={30} height={30} preview={false} src={state.appLogo}></Image>
                        </Col>
                        <Col>
                            <Typography.Title level={3} style={{color: '#1D174D', marginLeft: '8px', transform: 'translateY(-4px)'}}>{state.appName}</Typography.Title>
                        </Col>
                
                    </Row>
                </Layout.Header>
            </Affix>

            <Layout.Content>
                {/* cover headline */}
                <Row justify='start' align='middle' style={{'backgroundColor': 'white', 'height': '600px', 'paddingTop': '30px'}}>
                    <Row justify='start' style={{paddingLeft: '20px', width: '100%'}}>
                        <Typography.Title level={2} style={{marginBottom: 5}}>
                            {state.coverTitle}
                        </Typography.Title>
                    </Row>

                    <Row justify='start' style={{'padding': '0px 20px'}}>
                        <Typography style={{'fontSize': '20px', 'marginTop': 0}}>
                            {state.coverText}
                        </Typography>
                    </Row>

                    <Row justify='start' style={{'width': '100%', 'padding': '0px 20px', 'marginTop': '30px'}}>
                        {
                            state.appleStoreLink &&
                            <Col style={{'width': '40%'}}>
                                <Row justify='start'>
                                <a href={state.appleStoreLink} target='_blank' rel="noopener noreferrer">
                                    <Image height={50} preview={false} src={state.appleStoreBadge}></Image>
                                </a>
                                </Row>
                            </Col>
                        }

                    </Row>

                    <Row justify='center' style={{overflow: 'hidden'}}>
                        <Image preview={false} src={state.coverImage} style={{'width': '140%', 'maxWidth': 'none'}}></Image>
                    </Row>
                </Row>

                
                <Row style={{'marginTop': '30px'}}>
                    <SectionList sectionList={state.sectionList} />
                </Row>

                {/**
                 * policies (commented out)
                 * <Row justify='center' align='top' style={{'backgroundColor': 'white', 'height': '450px', 'padding': '70px 20px'}}>
                 *   <Row justify='center' align='top' style={{'width': '100%'}}>
                 *       <Button type="primary" shape="round" icon={<DownloadOutlined />} size='large' danger onClick={() => { window.scrollTo(0, 0)}}>Download</Button>
                 *   </Row>
                 *   <Row justify='space-around' align='top' style={{'width': '100%'}}>
                 *       <Col>
                 *           <Row justify='start' align='middle'>
                 *               <Typography>Who we are</Typography>
                 *           </Row>
                 *           <Row justify='start' align='middle' style={{'marginTop': '20px'}}>
                 *               <a href={state.appURL + '/policy/cookies'} target='_blank' rel="noopener noreferrer">
                 *                   <Typography.Title level={5} style={{'margin': '0px'}}>Cookies Policy</Typography.Title>
                 *               </a>
                 *           </Row>
                 *           <Row justify='start' align='middle' style={{'marginTop': '20px'}}>
                 *               <a href={state.appURL + '/policy/privacy'} target='_blank' rel="noopener noreferrer">
                 *                   <Typography.Title level={5} style={{'margin': '0px'}}>Privacy Policy</Typography.Title>
                 *               </a>
                 *           </Row>
                 *           <Row justify='start' align='middle' style={{'marginTop': '20px'}}>
                 *               <a href={state.appURL + '/policy/terms'} target='_blank' rel="noopener noreferrer">
                 *                   <Typography.Title level={5} style={{'margin': '0px'}}>Terms of Service</Typography.Title>
                 *               </a>
                 *           </Row>
                 *       </Col>
                 *       <Col>
                 *           <Row justify='start' align='middle'>
                 *               <Typography>Need help?</Typography>
                 *           </Row>
                 *           <Row justify='start' align='middle' style={{'cursor': 'pointer', 'marginTop': '20px'}}>
                 *               <Popover placement='top' title='Contact Us' content={
                 *                   <a href={state.discordLink} target='_blank' rel="noopener noreferrer">
                 *                       <Row justify='start' align='middle'>
                 *                           <Col>
                 *                               <Image width={40} height={40} preview={false} src={state.discordImage}></Image>
                 *                           </Col>
                 *                           <Col style={{'marginLeft': '5px'}}>
                 *                               <Typography>Join our Discord</Typography>
                 *                           </Col>
                 *                       </Row>
                 *                   </a>
                 *               } trigger='click'>
                 *                   <Typography.Title level={5} style={{'margin': '0px'}}>Contact Us</Typography.Title>
                 *               </Popover>
                 *           </Row>
                 *       </Col>
                 *   </Row>
                 * </Row>
                 */}
                

                <Row justify="center" align='middle' style={{'backgroundColor': 'white', 'padding': '0 0 40px 0'}}>
                    <Col>
                        <Typography.Text type="secondary" style={{'fontSize': 12}}>
                            {state.appName} © {new Date().getFullYear()}
                        </Typography.Text>
                    </Col>
                </Row>

            </Layout.Content>

            {/*
            <Layout.Footer>


            </Layout.Footer>
            */}

            </Layout>
    )
}

export default Mobile
