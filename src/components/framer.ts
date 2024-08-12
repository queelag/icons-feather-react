import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFramerElement } from '@aracna/icons-feather-web/elements/framer-element'

export const IconFeatherFramer: ElementComponent<IconFeatherFramerElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFramerElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-framer', IconFeatherFramerElement)
