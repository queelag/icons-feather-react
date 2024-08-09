import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherRadioElement } from '@aracna/icons-feather-web/elements/radio-element'

export const IconFeatherRadio: ElementComponent<IconFeatherRadioElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRadioElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-radio', IconFeatherRadioElement)
