import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherLinkedinElement } from '@aracna/icons-feather-web/elements/linkedin-element'

export const IconFeatherLinkedin: ElementComponent<IconFeatherLinkedinElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLinkedinElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-linkedin', IconFeatherLinkedinElement)
