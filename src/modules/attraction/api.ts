import $api from 'utils/http/settings'

export const getAttractionById = async ({ params }: any) => {
  const { data } = await $api.get(
    `http://localhost:4444/attractions/${params.id}`
  )
  return data
}

export const getAttraction = async ({ params }: any) => {
  const { data } = await $api.get(
    `http://localhost:4444/attractions/${params.friendlyURL}`
  )
  return data
}
