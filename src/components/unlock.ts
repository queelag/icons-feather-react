import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherUnlockElement } from '@aracna/icons-feather-web/elements/unlock-element'

export const IconFeatherUnlock: ElementComponent<IconFeatherUnlockElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUnlockElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-unlock', IconFeatherUnlockElement)
