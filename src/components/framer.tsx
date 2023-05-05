import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFramerElement } from '@aracna/icons-feather-web/elements/framer-element.js'

export const IconFeatherFramer: ElementComponent<IconFeatherFramerElement, IconProps> = createBaseElementComponent<
  IconFeatherFramerElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-framer', IconFeatherFramerElement)
