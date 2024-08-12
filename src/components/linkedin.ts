import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherLinkedinElement } from '@aracna/icons-feather-web/elements/linkedin-element'

export const IconFeatherLinkedin: ElementComponent<IconFeatherLinkedinElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLinkedinElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-linkedin', IconFeatherLinkedinElement)
