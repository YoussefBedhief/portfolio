import { motion } from "framer-motion"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"
import { PageInfo } from "../typings"

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}
type Props = {
  pageInfos: PageInfo
}

const ContactMe = ({ pageInfos }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto: youssef.bedhief@etudiant-isi.utm.tn?subject=${formData.subject}&body=Hi my name is ${formData.name}, ${formData.message} (${formData.email})`
  }
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col md:flex-row text-center md:text-left 
    max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
        Contact
      </h3>
      <div className="absolute top-32 flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          If you like what you see.{" "}
          <span className="underline decoration-[#7451eb]/50">
            `Let's Talk`
          </span>
        </h4>
        <div className="space-y-5 md:space-y-10">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{
              once: true,
            }}
            className="flex items-center space-x-5 justify-center"
          >
            <PhoneIcon className="text-[#7451eb] h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfos?.phoneNumber}</p>
          </motion.div>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{
              once: true,
            }}
            className="flex items-center space-x-5 justify-center"
          >
            <EnvelopeIcon className="text-[#7451eb] h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfos?.email}</p>
          </motion.div>
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{
              once: true,
            }}
            className="flex items-center space-x-5 justify-center"
          >
            <MapPinIcon className="text-[#7451eb] h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfos?.address}</p>
          </motion.div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-row space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#7451eb]/50 py-5 px-10 text-[#262626] rounded-md font-bold text-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactMe
