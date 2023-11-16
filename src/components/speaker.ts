import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSpeakerElement } from '@aracna/icons-feather-web/elements/speaker-element'

export const IconFeatherSpeaker: ElementComponent<IconFeatherSpeakerElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSpeakerElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-speaker', IconFeatherSpeakerElement)
