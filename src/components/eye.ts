import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherEyeElement } from '@aracna/icons-feather-web/elements/eye-element'

export const IconFeatherEye: ElementComponent<IconFeatherEyeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherEyeElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-eye', IconFeatherEyeElement)
