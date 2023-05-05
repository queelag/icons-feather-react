import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLinkedinElement } from '@aracna/icons-feather-web/elements/linkedin-element.js'

export const IconFeatherLinkedin: ElementComponent<IconFeatherLinkedinElement, IconProps> = createBaseElementComponent<
  IconFeatherLinkedinElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-linkedin', IconFeatherLinkedinElement)
