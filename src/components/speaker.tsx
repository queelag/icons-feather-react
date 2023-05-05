import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSpeakerElement } from '@aracna/icons-feather-web/elements/speaker-element.js'

export const IconFeatherSpeaker: ElementComponent<IconFeatherSpeakerElement, IconProps> = createBaseElementComponent<
  IconFeatherSpeakerElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-speaker', IconFeatherSpeakerElement)
