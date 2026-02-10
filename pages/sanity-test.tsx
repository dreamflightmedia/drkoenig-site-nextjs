import type {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import {sanityClient} from '../lib/sanity'

type Props = {
  ok: boolean
  projectId: string | null
  dataset: string | null
  timestamp?: string | null
  error?: string | null
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || null
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || null

  try {
    // Connectivity test only: no schemas required
    const query = `{ "timestamp": now() }`
    const result = await sanityClient.fetch<{timestamp: string}>(query)

    return {
      props: {
        ok: true,
        projectId,
        dataset,
        timestamp: result?.timestamp ?? null,
        error: null,
      },
    }
  } catch (e: any) {
    return {
      props: {
        ok: false,
        projectId,
        dataset,
        timestamp: null,
        error: e?.message || 'Unknown error',
      },
    }
  }
}

export default function SanityTestPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <main style={{padding: 24, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial'}}>
      <h1>Sanity Connectivity Test</h1>

      <p><strong>Status:</strong> {props.ok ? 'OK' : 'FAILED'}</p>
      <p><strong>Project ID:</strong> {props.projectId || '(missing)'}</p>
      <p><strong>Dataset:</strong> {props.dataset || '(missing)'}</p>

      {props.timestamp ? (
        <p><strong>Sanity timestamp:</strong> {props.timestamp}</p>
      ) : null}

      {props.error ? (
        <>
          <h2>Error</h2>
          <pre style={{whiteSpace: 'pre-wrap'}}>{props.error}</pre>
        </>
      ) : null}
    </main>
  )
}
