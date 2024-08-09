import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherVoicemailElement } from '@aracna/icons-feather-web/elements/voicemail-element'

export const IconFeatherVoicemail: ElementComponent<IconFeatherVoicemailElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherVoicemailElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-voicemail', IconFeatherVoicemailElement)
