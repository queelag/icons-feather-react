import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSpeakerElement } from '@aracna/icons-feather-web/elements/speaker-element'

export const IconFeatherSpeaker: ElementComponent<IconFeatherSpeakerElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSpeakerElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-speaker', IconFeatherSpeakerElement)
