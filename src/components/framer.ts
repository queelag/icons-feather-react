import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFramerElement } from '@aracna/icons-feather-web/elements/framer-element'

export const IconFeatherFramer: ElementComponent<IconFeatherFramerElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFramerElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-framer', IconFeatherFramerElement)
