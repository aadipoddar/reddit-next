import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useAuthState } from 'react-firebase-hooks/auth'
import PageContent from '../../../components/Layout/PageContent'
import NewPostForm from '../../../components/Posts/NewPostForm'
import { auth } from '../../../firebase/clientApp'

const SubmitPostPage: React.FC = () => {
    const [user] = useAuthState(auth)
    return (
        <>
            <Head>
                <title>Create a Post</title>
            </Head>
            <PageContent>
                <>
                    <Box p='14px 0px' borderBottom='1px solid' borderColor='white'>
                        <Text>Create a post</Text>
                    </Box>
                    {user && <NewPostForm user={user} />}
                </>
                <>{/* About */}</>
            </PageContent>
        </>
    )
}
export default SubmitPostPage