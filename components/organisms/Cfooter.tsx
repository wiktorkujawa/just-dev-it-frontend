import React, { Fragment} from 'react'
import DOMPurify from 'isomorphic-dompurify'
import Asvg from '../atoms/Asvg'
import Abutton from '../atoms/Abutton'
interface Props {
  
}

const footerContent = [
  {
    key: 'address',
    content: 'Sucharskiego 1a/26 \nOlsztyn,\n10-693 Poland'
  },
  {
    key: 'Phone',
    content: '+48 697 141 580'
  },
  {
    key: 'Email',
    content: '<a class="hover:opacity-50" href="mailto:wiktorkujawa1993@gmail.com">wiktorkujawa1993@gmail.com</a>'
  }
]

const Cfooter = (props: Props) => {
  return (
    <footer className="c-footer text-white overflow-hidden relative">
      <address className="bg-eerie-black">
        <table className="table-auto">
          <tbody>
        {
          footerContent.map( ({key, content}) => {
            return (
              <Fragment key={key}>
                <tr>
                  <td className="uppercase md:px-20 sm:px-10 px-6 align-text-top">
                    <h2 className="text-h4">{key}</h2>
                  </td>
                  <td className="whitespace-pre-wrap py-8 text-p3 sm:text-p1 align-text-top" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}/>
                </tr>
                <tr className="border-b-1 border-accent absolute w-full"/>
              </Fragment>
            )
          })
        }
        <tr key="social">
          <td className="uppercase md:px-20 sm:px-10 px-6">
            <h2 className="text-h4">SOCIAL</h2>
          </td>
          <td className="flex py-8 gap-x-8">
          <Abutton 
            className="text-white fill-current" 
            href="https://github.com/wiktorkujawa/" 
            target="_blank" 
            rel="noreferrer" 
            iconName="github"
          />
          <Abutton 
            className="text-white fill-current hover:text-linkedin" 
            href="https://www.linkedin.com/in/wiktor-kujawa-110bb2194/" 
            target="_blank" 
            rel="noreferrer" 
            iconName="linkedin"
          />
          </td>

        </tr>
        </tbody>
      </table>
    </address>
    <small className="bg-transparent py-10 block text-center w-full">&copy; JUST-DEV-IT.COM | DESIGN: WIKTOR KUJAWA</small>
    </footer>
  )
}

export default Cfooter
