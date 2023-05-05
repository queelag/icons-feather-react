import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMicElement } from '@aracna/icons-feather-web/elements/mic-element.js'

export const IconFeatherMic: ElementComponent<IconFeatherMicElement, IconProps> = createBaseElementComponent<
  IconFeatherMicElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-mic', IconFeatherMicElement)
