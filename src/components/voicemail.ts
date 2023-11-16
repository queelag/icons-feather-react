import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherVoicemailElement } from '@aracna/icons-feather-web/elements/voicemail-element'

export const IconFeatherVoicemail: ElementComponent<IconFeatherVoicemailElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherVoicemailElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-voicemail', IconFeatherVoicemailElement)
