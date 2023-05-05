import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFigmaElement } from '@aracna/icons-feather-web/elements/figma-element.js'

export const IconFeatherFigma: ElementComponent<IconFeatherFigmaElement, IconProps> = createBaseElementComponent<
  IconFeatherFigmaElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-figma', IconFeatherFigmaElement)
