import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherApertureElement } from '@aracna/icons-feather-web/elements/aperture-element'

export const IconFeatherAperture: ElementComponent<IconFeatherApertureElement, IconProps> = createBaseElementComponent<
  IconFeatherApertureElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-aperture', IconFeatherApertureElement)
