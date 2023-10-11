import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherVoicemailElement } from '@aracna/icons-feather-web/elements/voicemail-element'

export const IconFeatherVoicemail: ElementComponent<IconFeatherVoicemailElement, IconProps> = createBaseElementComponent<
  IconFeatherVoicemailElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-voicemail', IconFeatherVoicemailElement)
