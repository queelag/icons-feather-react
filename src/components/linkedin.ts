import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLinkedinElement } from '@aracna/icons-feather-web/elements/linkedin-element'

export const IconFeatherLinkedin: ElementComponent<IconFeatherLinkedinElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLinkedinElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-linkedin', IconFeatherLinkedinElement)
