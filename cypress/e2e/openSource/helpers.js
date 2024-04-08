// To Select Server Name
export function decideServerName()
{
   return 'Test'
}

// To Select Server URL
export function decideServerURL(Server)
{
    if(Server == 'Local' || Server == 'local' || Server  ==  'LOCAL')
    {
        return 'htcvhb001.local'
    }else if(Server == 'Test' || Server == 'test' || Server == 'TEST')
    {
        return 'healthtech-test'
    }else if(Server == 'Staging' || Server == 'staging' || Server == 'STAGING')
    {
        return 'healthtech-staging'
    }
}
