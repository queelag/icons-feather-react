import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherRadioElement } from '@aracna/icons-feather-web/elements/radio-element'

export const IconFeatherRadio: ElementComponent<IconFeatherRadioElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRadioElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-radio', IconFeatherRadioElement)
