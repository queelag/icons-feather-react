import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherRadioElement } from '@aracna/icons-feather-web/elements/radio-element.js'

export const IconFeatherRadio: ElementComponent<IconFeatherRadioElement, IconProps> = createBaseElementComponent<
  IconFeatherRadioElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-radio', IconFeatherRadioElement)
