import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMicOffElement } from '@aracna/icons-feather-web/elements/mic-off-element.js'

export const IconFeatherMicOff: ElementComponent<IconFeatherMicOffElement, IconProps> = createBaseElementComponent<
  IconFeatherMicOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-mic-off', IconFeatherMicOffElement)
